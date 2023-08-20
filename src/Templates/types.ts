import { FooterSectionProps } from "../Components/Sections/FooterSection/types";
import { HeaderSectionProps } from "../Components/Sections/HeaderSection/types";
import { MainSectionProps } from "../Components/Sections/MainSection/types";

export type TemplateProps = {
    footerSection: FooterSectionProps;
    mainSection: MainSectionProps;
    headerSection: HeaderSectionProps;
}