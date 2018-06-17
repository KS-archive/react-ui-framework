import React from 'react';
import { WithFigma } from 'storybook-addon-figma';
import ColorCard from '../../../helpers/ColorCard';
import { Container, Section, Header, Flexbox } from '../../../helpers/styles';

export default () => (
  <WithFigma url="https://www.figma.com/file/fokLDJ6eeChuquGuRz3mlbWN/Layout?node-id=1%3A5">
    <Container style={{ backgroundColor: '#fff' }}>
      <Section>
        <Header>Primary</Header>
        <Flexbox>
          <ColorCard
            colorName="primary1"
            colorValue="var(--primary1)"
            hex="#0061DF"
            rgb="0, 97, 223"
            hsl="211, 92, 44 "
          />
          <ColorCard
            colorName="primary2"
            colorValue="var(--primary2)"
            hex="#1A90FF"
            rgb="26, 144, 255"
            hsl="209, 100, 55"
          />
          <ColorCard
            colorName="primary3"
            colorValue="var(--primary3)"
            hex="#42AAFF"
            rgb="66, 170, 255"
            hsl="207, 100, 63"
          />
        </Flexbox>
      </Section>
      <Section>
        <Header>Accent</Header>
        <Flexbox>
          <ColorCard
            colorName="accent1"
            colorValue="var(--accent1)"
            hex="#FAAE14"
            rgb="250, 174, 20"
            hsl="40, 96, 53"
          />
          <ColorCard
            colorName="accent2"
            colorValue="var(--accent2)"
            hex="#FFC53D"
            rgb="255, 197, 61"
            hsl="42, 100, 62 "
          />
        </Flexbox>
      </Section>
      <Section>
        <Header>Greys</Header>
        <Flexbox>
          <ColorCard
            colorName="grey1"
            colorValue="var(--grey1)"
            hex="#292929"
            rgb="41, 41, 41"
            hsl="0, 0, 16"
          />
          <ColorCard
            colorName="grey2"
            colorValue="var(--grey2)"
            hex="#666666"
            rgb="102, 102, 102"
            hsl="0 0 40"
          />
          <ColorCard
            colorName="grey3"
            colorValue="var(--grey3)"
            hex="#A3A3A3"
            rgb="163, 163, 163"
            hsl="0, 0, 64"
          />
          <ColorCard
            colorName="grey4"
            colorValue="var(--grey4)"
            hex="#B8B8B8"
            rgb="184, 184, 184"
            hsl="0, 0, 72"
          />
          <ColorCard
            colorName="grey5"
            colorValue="var(--grey5)"
            hex="#CCCCCC"
            rgb="204, 204, 204"
            hsl="0, 0, 80"
          />
          <ColorCard
            colorName="grey6"
            colorValue="var(--grey6)"
            hex="#E0E0E0"
            rgb="224, 224, 224"
            hsl="0, 0, 88"
          />
          <ColorCard
            colorName="grey7"
            colorValue="var(--grey7)"
            hex="#F5F5F5"
            rgb="245, 245, 245"
            hsl="0, 0, 96"
          />
        </Flexbox>
      </Section>
      <Section>
        <Header>Notifications</Header>
        <Flexbox>
          <ColorCard
            colorName="info"
            colorValue="var(--info)"
            hex="#13C3C3"
            rgb="19, 195, 195"
            hsl="180, 82, 42"
          />
          <ColorCard
            colorName="success"
            colorValue="var(--success)"
            hex="#54C51B"
            rgb="84, 197, 27"
            hsl="100, 76, 44"
          />
          <ColorCard
            colorName="warning"
            colorValue="var(--warning)"
            hex="#FA8B14"
            rgb="250, 139, 20"
            hsl="31, 96, 53"
          />
          <ColorCard
            colorName="error"
            colorValue="var(--error)"
            hex="#F5242E"
            rgb="245, 36, 46"
            hsl="357, 91, 55"
          />
        </Flexbox>
      </Section>
      <Section>
        <Header>Text</Header>
        <Flexbox>
          <ColorCard
            colorName="text1"
            colorValue="var(--text1)"
            hex="#666666"
            rgb="102, 102, 102"
            hsl="0 0 40"
          />
          <ColorCard
            colorName="text2"
            colorValue="var(--text2)"
            hex="#666666"
            rgb="102, 102, 102"
            hsl="0 0 40"
          />
          <ColorCard
            colorName="text3"
            colorValue="var(--text3)"
            ex="#A3A3A3"
            rgb="163, 163, 163"
            hsl="0, 0, 64"
          />
        </Flexbox>
      </Section>
      <Section>
        <Header>Other</Header>
        <Flexbox>
          <ColorCard
            colorName="background"
            colorValue="var(--background)"
            hex="#FAFAFF"
            rgb="250, 250, 255"
            hsl="240, 100, 99"
          />
        </Flexbox>
      </Section>
    </Container>
  </WithFigma>
);
