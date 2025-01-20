import * as yup from 'yup';

export const PatientSchema = yup
  .object({
    id: yup.string().notRequired(),

    name: yup.string().nullable().max(255, 'erros.name.maxLen').required(),

    gender: yup
      .mixed<'M' | 'F' | ''>()
      .oneOf([ 'M', 'F', '' ], 'erros.gender.invalid')
      .nullable(),

    identityGender: yup
      .mixed<'M' | 'F' | 'U' | 'B' | ''>()
      .oneOf([ 'M', 'F', 'U', 'B', '' ], 'erros.identityGender.invalid'),

    birthDate: yup.string().nullable(),

    documentCpf: yup.string().nullable(),

    documentRg: yup.string().nullable(),

    contactPhone: yup
      .string()
      .nullable()
      .max(256, 'erros.contactPhone.maxLen'),

    contactPhoneSecondary: yup
      .string()
      .nullable()
      .max(256, 'erros.contactPhoneSecondary.maxLen'),

    contactEmail: yup
      .string()
      .email('erros.contactEmail.invalid')
      .nullable()
      .max(1024, 'erros.contactEmail.maxLen'),

    contactResponsibleEmail: yup
      .string()
      .nullable()
      .email('erros.contactResponsibleEmail.invalid')
      .max(1024, 'erros.contactResponsibleEmail.maxLen'),

    contactResponsiblePhone: yup
      .string()
      .nullable()
      .max(256, 'erros.contactResponsiblePhone.maxLen'),

    contactResponsibleSecondary: yup
      .string()
      .nullable()
      .max(256, 'erros.contactResponsibleSecondary.maxLen'),

    addressCep: yup.string().nullable().max(256, 'erros.addressCep.maxLen'),

    addressStreet: yup
      .string()
      .nullable()
      .max(256, 'erros.addressStreet.maxLen'),

    addressNumber: yup
      .string()
      .nullable()
      .max(256, 'erros.addressNumber.maxLen'),

    addressComplement: yup
      .string()
      .nullable()
      .max(256, 'erros.addressComplement.maxLen'),

    addressNeighborhood: yup
      .string()
      .nullable()
      .max(256, 'erros.addressNeighborhood.maxLen'),

    addressCity: yup.string().nullable().max(256, 'erros.addressCity.maxLen'),

    addressState: yup.string().nullable().max(256, 'erros.addressState.maxLen'),

    healthPlanInsurance: yup
      .string()
      .nullable()
      .max(256, 'erros.healthPlanInsurance.maxLen'),

    healthPlanNumber: yup
      .string()
      .nullable()
      .max(256, 'erros.healthPlanNumber.maxLen'),

    healthPlanName: yup
      .string()
      .nullable()
      .max(256, 'erros.healthPlanName.maxLen'),

    healthPlanExpireDate: yup
      .string()
      .datetime({
        message: 'erros.healthPlanExpireDate.invalidDate',
      })
      .nullable(),

    healthPlanContactPhone: yup
      .string()
      .nullable()
      .max(256, 'erros.healthPlanContactPhone.maxLen'),

    healthPlanContactEmail: yup
      .string()
      .nullable()
      .email('erros.healthPlanContactEmail.invalid')
      .max(256, 'erros.healthPlanContactEmail.maxLen'),

    notes: yup.string().nullable().max(65535, 'erros.notes.maxLen'),

    isSimplified: yup.boolean().nullable().notRequired(),

    createdAt: yup.date().nullable().notRequired(),
    updatedAt: yup.date().nullable().notRequired(),
    deletedAt: yup.date().nullable().notRequired(),
  })
  .required();

export type IPatientSchema = yup.InferType<typeof PatientSchema>;

