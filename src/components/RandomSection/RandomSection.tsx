import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  updateSection,
  type RandomSection as RandomSectionValue,
} from '../../services';

export interface RandomSectionProps {
  value: RandomSectionValue;
  onChange: (next: RandomSectionValue) => void;
  onDelete: () => void;
}

export function RandomSection({
  value,
  onChange,
  onDelete,
}: RandomSectionProps) {
  function update(partial: Partial<Omit<RandomSectionValue, 'id'>>) {
    onChange(updateSection(value, partial));
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={value.name}
              fullWidth
              variant="outlined"
              onChange={(event) => update({ name: event.target.value })}
            />
            <TextField
              label="Length"
              type="number"
              value={value.length}
              fullWidth
              variant="outlined"
              onChange={(event) =>
                update({ length: Number(event.target.value) || 0 })
              }
            />
            <Stack spacing={1}>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Choices
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value.useNumbers}
                    onChange={(event) =>
                      update({ useNumbers: event.target.checked })
                    }
                  />
                }
                label="Numbers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value.useLetters}
                    onChange={(event) =>
                      update({ useLetters: event.target.checked })
                    }
                  />
                }
                label="Letters"
              />
            </Stack>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<span className="material-icons">delete</span>}
              onClick={(event) => {
                event.preventDefault();
                onDelete();
              }}
            >
              Delete
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </form>
  );
}
