import { useState } from 'react';
import { Button } from './components/Button';
import { Typography } from './components/Typography';
import RandomSection from './components/RandomSection';
import {
  RandomConfiguration,
  RandomSectionModel,
} from './services';
import './styles/index.scss';
import './App.scss';

export function App() {
  const [output, setOutput] = useState('Random String');
  const [configuration, setConfiguration] = useState(
    () => new RandomConfiguration(),
  );

  function onAddSection() {
    setConfiguration((prev) => {
      const next = new RandomConfiguration();
      next.sections = [
        ...prev.sections,
        new RandomSectionModel(Date.now()),
      ];
      return next;
    });
  }

  function onDelete(deleteIndex: number) {
    setConfiguration((prev) => {
      const next = new RandomConfiguration();
      next.sections = prev.sections.filter((_, index) => index !== deleteIndex);
      return next;
    });
  }

  function onSectionChange(index: number, section: RandomSectionModel) {
    setConfiguration((prev) => {
      const next = new RandomConfiguration();
      next.sections = prev.sections.map((item, i) =>
        i === index ? section : item,
      );
      return next;
    });
  }

  function onGenerate() {
    if (configuration.sections.length === 0) {
      setOutput('Must have at least one section');
      return;
    }

    setOutput(configuration.toString());
  }

  return (
    <div className="app">
      <div className="main container">
        {configuration.sections.map((section, index) => (
          <RandomSection
            key={section.id}
            value={section}
            onChange={(next) => onSectionChange(index, next)}
            onDelete={() => onDelete(index)}
          />
        ))}
        <div className="main-bottomspace" />
      </div>
      <div className="bottombar">
        <div className="container bottombar-content">
          <Typography aria-label="output" variant="headline6">
            {output}
          </Typography>
          <Button block onClick={onGenerate}>
            Generate
          </Button>
          <Button color="secondary" block onClick={onAddSection}>
            Add Sections
          </Button>
        </div>
      </div>
    </div>
  );
}
