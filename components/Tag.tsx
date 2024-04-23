import {ReactElement} from "react";
import styled from "@emotion/styled";
import Link from "next/link";

export const TagTypes = {
    tech: 'tech',
    life: 'life'
} as const;

const TagColors = {
    tech: '#8E7AB5',
    life: '#88AB8E'
}

interface TagsProps {
    text: string
    type: keyof typeof TagTypes
}

const Container = styled.div`
  border-radius: 8px;
  padding: 2px 8px;
  width: fit-content;
  margin-bottom: 12px;
  color: #272222;
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