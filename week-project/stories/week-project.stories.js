import { html } from 'lit';
import '../src/week-project.js';

export default {
  title: 'WeekProject',
  component: 'week-project',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <week-project
      style="--week-project-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </week-project>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
