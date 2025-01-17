import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { mapClasses } from '../../../utils';

const meta: Meta = {
  title: 'Components/Table',
  render: renderTable,
  parameters: {},
  args: {
    variant: [],
    borderStyle: 'null',
    caption: 'List of users',
    captionPlacement: 'bottom',
    alignment: 'align-top',
    content: null,
  },
  argTypes: {
    content: {
      name: 'Content',
      description: 'Hidden helper arg for dynamically switching the table body',
      table: {
        disable: true,
      },
    },
    caption: {
      name: 'Caption',
      description: 'A description of the table, very useful for screen reader users.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Caption',
      },
    },
    captionPlacement: {
      name: 'Caption Placement',
      description:
        'Choose where to place the description of the table. If a visual description is not necessary, it can also be hidden visually and still be of value for screen reader users.',
      control: {
        type: 'select',
        labels: {
          bottom: 'Bottom (default)',
          top: 'Top',
          hidden: 'Visually hidden',
        },
      },
      options: ['bottom', 'top', 'hidden'],
      table: {
        category: 'Caption',
      },
    },
    borderStyle: {
      name: 'Border style',
      description: 'Border style',
      control: {
        type: 'radio',
        labels: {
          'null': 'Default (underlined)',
          'table-bordered': 'Bordered',
          'table-borderless': 'Borderless',
        },
      },
      options: ['null', 'table-bordered', 'table-borderless'],
      table: {
        category: 'General',
      },
    },
    variant: {
      name: 'Variants',
      description: 'Stylistic table variants.',
      control: {
        type: 'check',
        labels: {
          'table-sm': 'Small',
          'table-striped': 'Striped',
          'table-hover': 'Hover enabled',
        },
      },
      options: ['table-sm', 'table-striped', 'table-hover'],
      table: {
        category: 'General',
      },
    },
    alignment: {
      name: 'Alignment',
      description:
        'Vertical alignment options for cell content. Alignment classes can also be set for individual rows or cells.',
      control: {
        type: 'select',
        labels: {
          'align-top': 'Top (default)',
          'align-middle': 'Middle',
          'align-bottom': 'Bottom',
        },
      },
      options: ['align-top', 'align-middle', 'align-bottom'],
      table: {
        category: 'General',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

function renderTable(args: Args) {
  const cationTop = args.captionPlacement === 'top' ? 'caption-top' : 'null';
  const variants = args.variant.join(' ');
  return html`
    <table
      class=${mapClasses({
        table: true,
        [args.borderStyle]: args.borderStyle && args.borderStyle !== 'null',
        [variants]: variants && variants !== '',
        [cationTop]: cationTop !== 'null',
        [args.alignment]: args.alignment && args.alignment !== 'null',
      })}
    >
      <caption class=${args.captionPlacement === 'hidden' ? 'visually-hidden' : ''}>
        ${args.caption}
      </caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>

      <tbody>${args.content}</tbody>
    </table>
  `;
}

export const Default: Story = {
  args: {
    content: html`
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Someone</td>
        <td>
          else
          <br />
          entirely
        </td>
        <td>@twitter</td>
      </tr>
    `,
  },
};

export const TableWithButtons: Story = {
  args: {
    alignment: 'align-middle',
    content: html`
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>
          <button class="btn btn-secondary btn-icon btn-md">
            <span class="visually-hidden">Edit</span>
            <i class="pi pi-2012"></i>
          </button>
          <button class="btn btn-primary btn-icon btn-md ms-2">
            <span class="visually-hidden">Edit</span>
            <i class="pi pi-3193"></i>
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>
          <button class="btn btn-secondary btn-icon btn-md">
            <span class="visually-hidden">Edit</span>
            <i class="pi pi-2012"></i>
          </button>
          <button class="btn btn-primary btn-icon btn-md ms-2">
            <span class="visually-hidden">Edit</span>
            <i class="pi pi-3193"></i>
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>
          <button class="btn btn-secondary btn-icon btn-md">
            <span class="visually-hidden">Edit</span>
            <i class="pi pi-2012"></i>
          </button>
          <button class="btn btn-primary btn-icon btn-md ms-2">
            <span class="visually-hidden">Edit</span>
            <i class="pi pi-3193"></i>
          </button>
        </td>
      </tr>
    `,
  },
};
