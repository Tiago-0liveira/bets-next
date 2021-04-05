import React from "react"
import styled from "styled-components"
import Nav, { NavHeight } from "../components/nav"

interface ContentWithNavProps {
    children?: React.ReactNode
}
const ContentWithNav = ({ children }: ContentWithNavProps) => {
    return (
        <ContentWrapper>
            <Nav />
            <Content>
                {children}
            </Content>
        </ContentWrapper>
    )
}

export default ContentWithNav

const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #808080;
`;

const Content = styled.div`
    height: calc(100vh - ${NavHeight});
;
`