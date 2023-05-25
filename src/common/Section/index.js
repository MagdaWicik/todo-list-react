import { Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <Header>
            <Title>{title}</Title>
            {extraHeaderContent}
        </Header>
        {body}
    </section>

);

export default Section;