import { MoonLoader } from 'react-spinners';
import { colorConst } from '../../../constants/color.const';

const InnerSpinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <MoonLoader color={colorConst.primary.main} size={75} />
    </div>
  );
};

export default InnerSpinner;
