import { IPaginatedRequestReponse } from '@app/types/api';
import { IPatientSchema } from '@features/patient-feature/types/patients';
import APIClient from '@utils/apiClient';

class PatientsApi extends APIClient {

  public list = async(context: {query?: string | null, limit?: number | null, cursor?: string | null, deleted?: boolean}) : Promise<IPaginatedRequestReponse<IPatientSchema>> => {
    const response = await this.request({
      endPoint: '/patients',
      method: 'GET',
      getParams: {
        query: context.query ?? undefined,
        limit: context.limit ?? undefined,
        cursor: context.cursor ?? undefined,
        deleted: context.deleted == true? 'true' : undefined,
      },
      token: this.token,
      tenantID: this.tenantID,
    });

    return response.data;
  };
}

export default new PatientsApi();
