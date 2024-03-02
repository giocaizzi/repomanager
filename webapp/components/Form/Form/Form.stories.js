import Form from './Form';

export default {
    title: 'Forms/Form',
    component: Form,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
};

export const Default = () => <Form />;