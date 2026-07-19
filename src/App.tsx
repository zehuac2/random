import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button } from './components/Button';
import { Typography } from './components/Typography';
import RandomSection from './components/RandomSection';
import { RandomConfiguration, RandomSectionModel } from './services';

export function App() {
  const [output, setOutput] = useState('Random String');
  const [configuration, setConfiguration] = useState(
    () => new RandomConfiguration(),
  );

  function onAddSection() {
    setConfiguration((prev) => {
      const next = new RandomConfiguration();
      next.sections = [...prev.sections, new RandomSectionModel(Date.now())];
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
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container
        maxWidth="md"
        sx={{
          flex: '1 1 auto',
          overflow: 'auto',
          py: 2,
        }}
      >
        <Stack spacing={2}>
          {configuration.sections.map((section, index) => (
            <RandomSection
              key={section.id}
              value={section}
              onChange={(next) => onSectionChange(index, next)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </Stack>
      </Container>
      <Paper
        elevation={0}
        square
        sx={{
          flex: '0 0 auto',
          borderTop: 1,
          borderColor: 'divider',
          py: 1,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={1}>
            <Typography aria-label="output" variant="headline6">
              {output}
            </Typography>
            <Button block onClick={onGenerate}>
              Generate
            </Button>
            <Button color="secondary" block onClick={onAddSection}>
              Add Sections
            </Button>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}
