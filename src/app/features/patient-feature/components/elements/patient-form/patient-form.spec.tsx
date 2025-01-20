import PatientForm from './index';
import { render } from '@lib/tests';

describe('PatientForm Component', () => {
  it('should render', () => {
    const { container } = render(
      <PatientForm/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<PatientForm>
      <div>Test</div>
    </PatientForm>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<PatientForm className="test">Test</PatientForm>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
