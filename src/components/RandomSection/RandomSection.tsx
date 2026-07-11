import { createComponent } from '@lit/react';
import React from 'react';
import { MdCheckbox } from '@material/web/checkbox/checkbox.js';
import { MdOutlinedCard } from '@material/web/labs/card/outlined-card.js';
import { Button } from '../Button';
import { TextField } from '../TextField';
import type { RandomSectionModel } from '../../services';

const OutlinedCard = createComponent({
  tagName: 'md-outlined-card',
  elementClass: MdOutlinedCard,
  react: React,
});

const Checkbox = createComponent({
  tagName: 'md-checkbox',
  elementClass: MdCheckbox,
  react: React,
  events: {
    onChange: 'change',
  },
});

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
      className="section-card"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <OutlinedCard className="section-card-surface">
        <div className="section-card-body">
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
          <div className="section-choices">
            <span className="section-choices-title">Choices</span>
            <label className="section-choice">
              <Checkbox
                checked={value.useNumbers}
                onChange={(event: Event) => {
                  const target = event.target as HTMLInputElement;
                  update({ useNumbers: target.checked });
                }}
              />
              <span>Numbers</span>
            </label>
            <label className="section-choice">
              <Checkbox
                checked={value.useLetters}
                onChange={(event: Event) => {
                  const target = event.target as HTMLInputElement;
                  update({ useLetters: target.checked });
                }}
              />
              <span>Letters</span>
            </label>
          </div>
          <Button
            variant="outlined"
            block
            onClick={(event) => {
              event.preventDefault();
              onDelete();
            }}
          >
            Delete
          </Button>
        </div>
      </OutlinedCard>
    </form>
  );
}
