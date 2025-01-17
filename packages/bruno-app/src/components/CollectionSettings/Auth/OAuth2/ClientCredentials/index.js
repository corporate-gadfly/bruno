import React from 'react';
import get from 'lodash/get';
import { useDispatch } from 'react-redux';
import { saveCollectionRoot, sendCollectionOauth2Request } from 'providers/ReduxStore/slices/collections/actions';
import StyledWrapper from './StyledWrapper';
import { inputsConfig } from './inputsConfig';
import { updateCollectionAuth } from 'providers/ReduxStore/slices/collections';
import CodeEditor from 'components/CodeEditor';

const OAuth2ClientCredentials = ({ collection }) => {
  const dispatch = useDispatch();

  const oAuth = get(collection, 'root.request.auth.oauth2', {});

  const handleRun = async () => {
    dispatch(sendCollectionOauth2Request(collection.uid));
  };

  const handleSave = () => dispatch(saveCollectionRoot(collection.uid));

  const { accessTokenUrl, clientId, clientSecret, scope } = oAuth;

  const handleChange = (key, value) => {
    dispatch(
      updateCollectionAuth({
        mode: 'oauth2',
        collectionUid: collection.uid,
        content: {
          grantType: 'client_credentials',
          accessTokenUrl,
          clientId,
          clientSecret,
          scope,
          [key]: value
        }
      })
    );
  };

  return (
    <StyledWrapper className="mt-2 flex w-full gap-4 flex-col">
      {inputsConfig.map((input) => {
        const { key, label } = input;
        return (
          <div className="flex flex-col w-full gap-1" key={`input-${key}`}>
            <label className="block font-medium">{label}</label>
            <div className="single-line-editor-wrapper">
              <CodeEditor
                value={oAuth[key] || ''}
                onSave={handleSave}
                onChange={(val) => handleChange(key, val)}
                onRun={handleRun}
                singleLine
              />
            </div>
          </div>
        );
      })}
      <button onClick={handleRun} className="submit btn btn-sm btn-secondary w-fit">
        Get Access Token
      </button>
    </StyledWrapper>
  );
};

export default OAuth2ClientCredentials;
