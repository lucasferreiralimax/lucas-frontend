import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ContactItem } from './types';
import contacts from './data';

import './style.scss';

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Lucas ${t('navigation.contact')}`;
  }, []);

  return (
    <>
      <h2>🌎 { t('pageContact.title') }</h2>
      <section className='social'>
        {contacts.map((item: ContactItem) => (
          <a
            href={item.link}
            target="_blank"
            key={item.name}
          >
            {item.icon
              ? (
                <item.icon
                  className={
                    `icon ${item.className ? item.className : item.name.toLocaleLowerCase()}`
                  }
                />
              )
              : (
                <img
                  width="30"
                  height="30"
                  src={item.img}
                  className={
                    `icon ${item.className ? item.className : item.name.toLocaleLowerCase()}`
                  }
                />
              )}
            <span>{ item.name }</span>
          </a>
        ))}
      </section>
    </>
  )
}

export default Contact;
