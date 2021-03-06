/**
 * @author Mugdha Agharkar
 */

import styled from "styled-components";

const PageWrapper = styled.div`
    background-color: #EFEFEF;
`;

const ContentWrapper = styled.div`
    min-height: calc(100vh - 172px);
`;

const TopMetricesContainer = styled.div``;

const StockTableContainer = styled.div`
    padding: 24px;
`;

const Heading = styled.div`
    font-size: 20px;
    margin-left: 24px;
    margin-top: 24px;
    font-weight: 700;
`;

export {PageWrapper, ContentWrapper, TopMetricesContainer,StockTableContainer, Heading};