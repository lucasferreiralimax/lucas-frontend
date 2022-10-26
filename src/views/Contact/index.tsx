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
      <section className='app-social' data-testid='app-social'>
        {contacts.map((item: ContactItem) => (
          <a
            href={item.link}
            target='_blank'
            key={item.name}
            role='link'
            aria-label={`Link ${item.name}`}
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
                  width='30'
                  height='30'
                  src={item.img}
                  className={
                    `app-social__icon ${item.className ? item.className : item.name.toLocaleLowerCase()}`
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
