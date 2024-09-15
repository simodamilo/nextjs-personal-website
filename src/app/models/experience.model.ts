export interface Icon {
  key?: number;
  icon?: React.ReactNode;
  title?: string;
}

export interface Experience {
  key?: number;
  briefTitle?: string;
  completeTitle?: string;
  briefDescription?: string;
  completeDescription?: string;
  icons?: Icon[];
}

export interface ExperienceTemplateProps {
  title?: string;
  experiences?: Experience[];
  size?: string;
}
