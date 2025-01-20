import ExternalFormPageLayoutLayout from './index';
import { render } from '@lib/tests';

describe('ExternalFormPageLayoutLayout Component', () => {
  it('should render', () => {
    const { container } = render(
      <ExternalFormPageLayoutLayout title=""/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<ExternalFormPageLayoutLayout title="">
      <div>Test</div>
    </ExternalFormPageLayoutLayout>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<ExternalFormPageLayoutLayout title="" className="test">Test</ExternalFormPageLayoutLayout>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
