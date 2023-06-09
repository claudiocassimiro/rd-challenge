import { useWindowSize } from "@/utils/helpers";
import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";
import { FaArrowRight } from "react-icons/fa";

import { useForm, FormProvider } from "react-hook-form";
import {
  generateBusinessCardSchema,
  generateBusinessCardData,
} from "../.././utils/schemas/genereteBusinessCardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleInputMask } from "../../utils/helpers/inputMaskHelper";
import { Form } from "./index";
import AlertText from "../AlertTexts";
import Button from "../Button";

export default function FormComponent() {
  const generateBusinessCard = useForm<generateBusinessCardData>({
    resolver: zodResolver(generateBusinessCardSchema),
  });

  const { handleSubmit, setValue } = generateBusinessCard;
  const handleFormValues = (data: any) => {
    console.log(data);
  };

  const { isDesktop } = useWindowSize();
  return (
    <div className={styles.container}>
      <ImageComponent
        src="/images/paint-man.webp"
        alt="imagem de homem pintando uma tela"
        width={isDesktop ? 471 : 269}
        height={isDesktop ? 347 : 198}
        className={styles.imageStyle}
        hasPriority
      />
      <div className={styles.formContainer}>
        <FormProvider {...generateBusinessCard}>
          <form
            onSubmit={handleSubmit(handleFormValues)}
            className={styles.form}
          >
            <Form.Field className={styles.containerInput}>
              <Form.Label htmlFor="name">Nome*</Form.Label>
              <Form.Input
                name="name"
                type="text"
                placeholder="digite seu nome"
                tabIndex={1}
              />

              <Form.ErrorMessage field="name" />
            </Form.Field>

            <div className={styles.containerPhoneInputAndEmailInput}>
              <Form.Field
                className={`${styles.containerInput} ${styles.containerInputPhone}`}
              >
                <Form.Label htmlFor="phone">Telefone*</Form.Label>
                <Form.Input
                  name="phone"
                  type="text"
                  placeholder="(00) 0 0000-0000"
                  onKeyUp={(e) => setValue("phone", handleInputMask(e))}
                  maxLength={16}
                  tabIndex={2}
                />

                <Form.ErrorMessage field="phone" />
              </Form.Field>

              <Form.Field
                className={`${styles.containerInput} ${styles.containerInputEmail}`}
              >
                <Form.Label htmlFor="email">Email*</Form.Label>
                <Form.Input
                  name="email"
                  type="email"
                  placeholder="nome@email.com"
                  tabIndex={3}
                />

                <Form.ErrorMessage field="email" />
              </Form.Field>
            </div>
            <AlertText />

            <Button
              type="submit"
              text="GERAR CARTÃO GRÁTIS"
              Icon={FaArrowRight}
              tabIndex={4}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}