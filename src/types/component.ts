type ButtonProp = {
  type?: string | any;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
};

type InputTypes = {
  id: string;
  type?: string;
  label?: string;
  placeholder?: string;
  helperText?: boolean;
  className?: string;
  register?: any;
  textarea?: boolean
};
