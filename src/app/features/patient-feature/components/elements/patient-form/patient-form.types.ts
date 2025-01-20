import { ITestableProps } from '@app/types/testing';
import { IPatientSchema } from '@features/patient-feature/types/patients';
import React from 'react';

export interface PatientFormProps extends ITestableProps {
    className?: string;
    style?: React.CSSProperties;
    patient?: IPatientSchema;
    onSave?: (data: IPatientSchema) => void;
}
