import styled from "@emotion/styled";

export const DivWrapper = styled.div<{ successSuffixIcon: boolean }>`
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
  .ant-form-item {
    margin-bottom: 32px;
  }
`;
