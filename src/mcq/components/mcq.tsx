import { Box } from '../../components/core/box';
import { Text } from '../../components/core/text';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';

export type MCQProps = MCQTitleProps & {
  choices: Array<{
    label: string;
    value: string;
    checked: boolean;
  }>;
  onClick: ({ value, checked }: { value: string; checked: boolean }) => void;
};

export const MCQ = ({ number, question, choices, onClick }: MCQProps) => {
  const renderMCQ: (
    value: { label: string; value: string; checked: boolean },
    index: number,
    array: { label: string; value: string; checked: boolean }[],
  ) => JSX.Element = (v, index) => (
    <MCQ.Checkbox onClick={onClick} key={index} {...v} />
  );
  return (
    <>
      <MCQ.Title number={number} question={question} />
      <FormControl component="fieldset">
        <FormGroup>
          <Box flexGrow={1} flexDirection="row" flexWrap="wrap">
            {choices.map(renderMCQ)}
          </Box>
        </FormGroup>
      </FormControl>
    </>
  );
};

export interface MCQChoiseProps {
  value: string;
  label: string;
  checked: boolean;
  onClick: ({ value, checked }: { value: string; checked: boolean }) => void;
}

const StyledControlLabel = styled(FormControlLabel)`
  align-self: flex-start;
`;

MCQ.Checkbox = ({ value, label, checked, onClick }: MCQChoiseProps) => {
  return (
    <Box flexBasis="48%" padding={2}>
      <StyledControlLabel
        control={
          <Checkbox
            checked={checked}
            value={value}
            onClick={() => onClick({ value, checked })}
          />
        }
        label={label}
        value={value}
      />
    </Box>
  );
};

export interface MCQTitleProps {
  number: number;
  question: string;
}

MCQ.Title = ({ number, question }: MCQTitleProps) => {
  return (
    <Box backgroundColor="lightBlue" padding={3}>
      <Text color="white" fontSize={3}>
        {number} . {question}
      </Text>
    </Box>
  );
};
