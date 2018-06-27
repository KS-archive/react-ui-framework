import React from 'react';
import { text, select, boolean, object, number} from '@storybook/addon-knobs';
import { WithFigma } from 'storybook-addon-figma';
import { Container, Flexbox, Section, Header} from '../../../helpers/styles';
import { Pagination } from 'react-ui-framework';


export default () => (
    <WithFigma url="https://www.figma.com/file/cN9ICvikYvcorYB3MSFeTucF/General?node-id=1%3A2">
        <Container style={{ backgroundColor: '#333', height: '100vh' }}>
            <Section>
                <Header style={{ color: '#fff' }}>Pagination</Header>
                <Flexbox>
                    <Pagination
                        pageCount={number('page count',6)}
                        previousLabelClass={text('previous label class', '')}
                        nextLabelClass={text('next label class', '')}
                    />
                </Flexbox>
            </Section>
        </Container>
    </WithFigma>
);
