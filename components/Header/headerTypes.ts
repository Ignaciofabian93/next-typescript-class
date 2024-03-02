type HeaderOptional = {
  color?: string;
  title: string;
};

type HeaderRequired = {
  color: string;
  title: string;
};

export type HeaderProps = HeaderOptional | HeaderRequired;
