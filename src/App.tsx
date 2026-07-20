import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RandomSection from './components/RandomSection';
import {
  addSection,
  deleteSection,
  generate,
  toModel,
  toPlain,
  updateSection,
} from './store/randomSlice';
import { useAppDispatch, useAppSelector } from './store';

export function App() {
  const dispatch = useAppDispatch();
  const output = useAppSelector((state) => state.random.output);
  const sections = useAppSelector((state) => state.random.sections);

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
          {sections.map((section, index) => (
            <RandomSection
              key={section.id}
              value={toModel(section)}
              onChange={(next) =>
                dispatch(
                  updateSection({
                    index,
                    section: toPlain(next),
                  }),
                )
              }
              onDelete={() => dispatch(deleteSection(index))}
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
            <Typography aria-label="output" variant="h6">
              {output}
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={() => dispatch(generate())}
            >
              Generate
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => dispatch(addSection())}
            >
              Add Sections
            </Button>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}
