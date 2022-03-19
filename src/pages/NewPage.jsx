import React from 'react';
import { Button, message } from 'antd';
import ProForm, {
  ModalForm,
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormDatePicker,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  return (
    <ModalForm
      title="新建听课表"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建听课表
        </Button>
      }
      autoFocusFirstInput
      modalProps={{
        onCancel: () => console.log('run'),
      }}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('提交成功');
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="auto"
          name="classname"
          label="教学班级课程名称"
          placeholder="请输入课程名称"
        />

        <ProFormText
          width="auto"
          name="teachername"
          label="任课老师姓名"
          placeholder="请输入姓名"
        />
        <ProFormText width="auto" name="location" label="上课地点" placeholder="请输入地点" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: '通识教育课程',
            },
            {
              value: 'chapter',
              label: '大类基础课程',
            },
            {
              value: 'chapter',
              label: '专业教学课程',
            },
            {
              value: 'chapter',
              label: '开放选修课程',
            },
          ]}
          width="md"
          name="useMode"
          label="课程类别"
        />

        <ProFormDatePicker name="Time" width="md" table-layout="fixed" label="听课时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText width="md" name="grade" label="学生所在学院和年级" />

        <ProFormSelect
          request={async () => [
            {
              value: 'chapter',
              label: '现场反馈',
            },
            {
              value: 'chapter',
              label: '邮件反馈',
            },
            {
              value: 'chapter',
              label: '暂不反馈',
            },
            {
              value: 'chapter',
              label: '学院向教师反馈',
            },
          ]}
          width="md"
          name="useMode"
          label="对任课教师的反馈情况"
        />
      </ProForm.Group>
      <ProFormSelect
        request={async () => [
          {
            value: 'chapter',
            label: '教师讲授 ',
          },
          {
            value: 'chapter',
            label: '学生讨论汇报',
          },
          {
            value: 'chapter',
            label: '教师讲授+学生讨论汇报',
          },
          {
            value: 'chapter',
            label: '其他',
          },
        ]}
        width="md"
        name="useMode"
        label="主要授课方法"
      />
      <ProFormTextArea name="content" label="主要授课内容"></ProFormTextArea>

      <ProForm.Group>
        <ProFormText width="xs" name="number1" label="应到人数" />

        <ProFormText width="xs" name="number2" label="实到人数" />
        <ProFormText width="xs" name="number3" label="迟到人数" />
        <ProFormText width="xs" name="number4" label="早退人数" />
      </ProForm.Group>
    </ModalForm>
  );
};
