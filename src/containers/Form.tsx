import { Styler } from 'assets/styles/Styler';
import Button from 'components/Button/Button';
import Modal from 'components/Modal';
import Select from 'components/Select';
import { Controller, useForm } from 'react-hook-form';
import { Language } from 'store/language.types';
import { useStore } from 'store/store';
import styled from 'styled-components';
import { isMobile } from 'utils/device';

export type Props = {
  onClose: () => void;
};

interface FormType {
  languages: Language[];
}

const Form = (props: Props) => {
  const languages = useStore((state) => state.languageData);
  const updateLanguages = useStore((state) => state.updateLanguages);
  const updateLanguageData = useStore((state) => state.updateLanguageData);

  const { onClose } = props;

  const { handleSubmit, errors, control, register } = useForm<FormType>({
    defaultValues: {
      languages: [],
    },
  });

  const onLanguageSubmit = (data: FormType) => {
    let formData = data;
    //only for testing purpose
    if (process?.env?.testForm) {
      //@ts-ignore
      formData = { languages: [JSON.parse(data.languages)] };
    }
    formData.languages.map((l) => (l.selected = true));
    updateLanguages(formData.languages);
    updateLanguageData(formData.languages);
    onClose();
  };

  return (
    <Styled.Container
      onClose={onClose}
      isMobile={isMobile}
      data-testid="language-modal"
    >
      <Styled.Heading>Add languages</Styled.Heading>
      <form onSubmit={handleSubmit((data) => onLanguageSubmit(data))}>
        <Styled.SelectContainer>
          <Controller
            control={control}
            rules={{ required: true }}
            name="languages"
            render={(props) => {
              return (
                <Select
                  options={languages.map((language) => ({
                    ...language,
                    value: language.id,
                    isDisabled: language.selected,
                  }))}
                  placeholder="Select Language"
                  error={errors.languages ? 'Required' : ''}
                  isMulti
                  {...props}
                />
              );
            }}
          />
          {process?.env?.testForm && (
            <input
              name="languages"
              type="hidden"
              ref={register({ required: true })}
              data-testid="language-select"
              title="This is for testing purpose"
            />
          )}
        </Styled.SelectContainer>

        <Styler.FlexJustifyEnd>
          <Styled.Button type="button" variant="milky" onClick={onClose}>
            Close
          </Styled.Button>
          <Button type="submit" data-testid="submit-language">
            Add
          </Button>
        </Styler.FlexJustifyEnd>
      </form>
    </Styled.Container>
  );
};

const Styled = {
  Heading: styled.h3`
    font-size: 21px;
    line-height: 25px;
    color: ${(props) => props.theme.colors.black100};
    margin: 0;
    margin-bottom: ${(props) => props.theme.spacings.xl};
  `,
  Button: styled(Button)`
    margin-right: ${(props) => props.theme.spacings.m};
  `,
  SelectContainer: styled.div`
    margin-bottom: ${(props) => props.theme.spacings.xl};
  `,
  SymboldGrid: styled.div`
    width: calc(100% - 30px);
    margin: 0 0 ${(props) => props.theme.spacings.ml};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    gap: ${(props) => props.theme.spacings.s};
    grid-template-rows: 30px;
  `,
  Container: styled(Modal)`
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  `,
};

export default Form;
