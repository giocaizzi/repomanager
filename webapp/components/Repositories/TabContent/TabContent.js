import styles from './TabContent.module.css';
import PropTypes from 'prop-types';

export default function TabContent ({ children , id}) {
  return (
    <div className={styles.tabContent} id={id}>
      {children}
    </div>
  );
}

TabContent.propTypes = {
  /** The content of the tab */
  children: PropTypes.node,
  /** The id of the tab */
  id: PropTypes.string,
};