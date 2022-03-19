import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const defaultMessage = 'SKLCC实验室';
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '课务管理系统',
          title: '课务管理系统',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
