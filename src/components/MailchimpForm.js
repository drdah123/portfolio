import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsLetters from './NewsLetters';

const MailchimpFrom = () => {
  const postUrl = `${process.env.React_MAILCHIMP_URL}?u=${process.env.React_MAILCHIMP_U}$id=${process.env.React_MAILCHIMP_ID}`;
  return (
    <>
      <div>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <NewsLetters
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </>
  );
};

export default MailchimpFrom;
