// import React from 'react';
// import { Form, Field } from 'formik';
// import Story from '@lskjs/dev/Story';
// import createForm from '../../createForm';
// import EditorComponent from '../../controls/Editor';
// import FormGroup from '../../FormGroup';

// const EditorView = (props) => {
//   const {
//     controls,
//   } = props;
//   return (
//     <Form>
//       <Field {...control('editor')} />
//     </Form>
//   );
// };

// const Editor = createForm({
//   view: EditorView,
//   FormGroup,
//   controls: {
//     editor: {
//       title: 'Editor',
//       component: EditorComponent,
//     },
//   },
// });

// export default ({ storiesOf }) =>
//   storiesOf('form/controls', module)
//     .add('Editor ', () => {
//       return (
//         <Story>
//           <Editor />
//         </Story>
//       );
//     });
