import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '../Button';
import { TextField } from '../TextField';
import type { RandomSectionModel } from '../../services';

export interface RandomSectionProps {
  value: RandomSectionModel;
  onChange: (next: RandomSectionModel) => void;
  onDelete: () => void;
}

export function RandomSection({
  value,
  onChange,
  onDelete,
}: RandomSectionProps) {
  function update(partial: Partial<RandomSectionModel>) {
    const next = value.clone();
    Object.assign(next, partial);
    onChange(next);
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
              onChange={(name) => update({ name })}
            />
            <TextField
              label="Length"
              type="number"
              value={value.length}
              onChange={(length) => update({ length: Number(length) || 0 })}
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
              block
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
