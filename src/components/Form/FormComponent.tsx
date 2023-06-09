import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { useForm, FormProvider } from "react-hook-form";
import {
  generateBusinessCardSchema,
  GenerateBusinessCardData,
} from "../.././utils/schemas/genereteBusinessCardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleInputMask } from "../../utils/helpers/inputMaskHelper";
import { Form } from "./index";
import AlertText from "../AlertTexts";
import Button from "../Button";

interface FormComponentAttributes {
  setCardData: (data: GenerateBusinessCardData) => void;
}

export default function FormComponent({
  setCardData,
}: FormComponentAttributes) {
  const generateBusinessCard = useForm<GenerateBusinessCardData>({
    resolver: zodResolver(generateBusinessCardSchema),
  });

  const { handleSubmit, setValue, reset } = generateBusinessCard;
  const handleFormValues = (data: GenerateBusinessCardData) => {
    setCardData(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <ImageComponent
          src="/images/paint-man.webp"
          alt="Imagem de homem pintando uma tela"
          hasPriority
          dataAos="zoom-out"
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <FormProvider {...generateBusinessCard}>
          <form
            noValidate
            data-aos="zoom-out"
            onSubmit={handleSubmit(handleFormValues)}
            className={styles.form}
          >
            <Form.Field className={styles.containerInput}>
              <Form.Label htmlFor="name">Nome*</Form.Label>
              <Form.Input
                name="name"
                type="text"
                placeholder="digite seu nome"
                tabIndex={0}
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
                />

                <Form.ErrorMessage field="email" />
              </Form.Field>
            </div>
            <AlertText />

            <Button
              type="submit"
              text="GERAR CARTÃO GRÁTIS"
              Icon={HiOutlineArrowNarrowRight}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
