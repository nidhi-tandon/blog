import {ReactElement} from "react";
import styled from "@emotion/styled";

export const TagTypes = {
    tech: 'tech',
    life: 'life'
} as const;

const TagColors = {
    tech: '#8E7AB5',
    life: '#739072'
}

interface TagsProps {
    text: string
    type: keyof typeof TagTypes
}

const Container = styled.div`
  border-radius: 12px;
  padding: 2px 8px;
  width: fit-content;
  margin-bottom: 12px;
  color: #e4dfdf;
  font-size: 14px;
`
const Tag = ({text, type}: TagsProps): ReactElement => {
    return(
        <Container style={{
            backgroundColor: TagColors[type]
        }}>
            {text}
        </Container>
    )
}

export default Tag