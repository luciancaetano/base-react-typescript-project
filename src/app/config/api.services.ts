import axios from 'axios';

export default {
  nfe: {
    async getAll() {
      const { data } = await axios.get('http://localhost:3002/nfe');
      return data.data;
    },

    async delete(id: number) {
      const { data } = await axios.delete(`http://localhost:3002/nfe/${id}`);
      return data;
    },
  },
  nfeUpload: {
    async upload(file: File) {
      const formData = new FormData();
      formData.append('nfe', file);

      return axios.post('http://localhost:3001/nfe', formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${(formData as any)._boundary}`,
        },
      });
    },
  },
};
