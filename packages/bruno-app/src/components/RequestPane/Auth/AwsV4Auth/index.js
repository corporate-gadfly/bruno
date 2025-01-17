import React, { useState } from 'react';
import get from 'lodash/get';
import { useDispatch } from 'react-redux';
import CodeEditor from 'src/components/CodeEditor';
import { updateAuth } from 'providers/ReduxStore/slices/collections';
import { sendRequest, saveRequest } from 'providers/ReduxStore/slices/collections/actions';
import StyledWrapper from './StyledWrapper';

const AwsV4Auth = ({ item, collection }) => {
  const dispatch = useDispatch();

  const awsv4Auth = item.draft ? get(item, 'draft.request.auth.awsv4', {}) : get(item, 'request.auth.awsv4', {});

  const handleRun = () => dispatch(sendRequest(item, collection.uid));
  const handleSave = () => dispatch(saveRequest(item.uid, collection.uid));

  const handleAccessKeyIdChange = (accessKeyId) => {
    dispatch(
      updateAuth({
        mode: 'awsv4',
        collectionUid: collection.uid,
        itemUid: item.uid,
        content: {
          accessKeyId: accessKeyId,
          secretAccessKey: awsv4Auth.secretAccessKey,
          sessionToken: awsv4Auth.sessionToken,
          service: awsv4Auth.service,
          region: awsv4Auth.region,
          profileName: awsv4Auth.profileName
        }
      })
    );
  };

  const handleSecretAccessKeyChange = (secretAccessKey) => {
    dispatch(
      updateAuth({
        mode: 'awsv4',
        collectionUid: collection.uid,
        itemUid: item.uid,
        content: {
          accessKeyId: awsv4Auth.accessKeyId,
          secretAccessKey: secretAccessKey,
          sessionToken: awsv4Auth.sessionToken,
          service: awsv4Auth.service,
          region: awsv4Auth.region,
          profileName: awsv4Auth.profileName
        }
      })
    );
  };

  const handleSessionTokenChange = (sessionToken) => {
    dispatch(
      updateAuth({
        mode: 'awsv4',
        collectionUid: collection.uid,
        itemUid: item.uid,
        content: {
          accessKeyId: awsv4Auth.accessKeyId,
          secretAccessKey: awsv4Auth.secretAccessKey,
          sessionToken: sessionToken,
          service: awsv4Auth.service,
          region: awsv4Auth.region,
          profileName: awsv4Auth.profileName
        }
      })
    );
  };

  const handleServiceChange = (service) => {
    dispatch(
      updateAuth({
        mode: 'awsv4',
        collectionUid: collection.uid,
        itemUid: item.uid,
        content: {
          accessKeyId: awsv4Auth.accessKeyId,
          secretAccessKey: awsv4Auth.secretAccessKey,
          sessionToken: awsv4Auth.sessionToken,
          service: service,
          region: awsv4Auth.region,
          profileName: awsv4Auth.profileName
        }
      })
    );
  };

  const handleRegionChange = (region) => {
    dispatch(
      updateAuth({
        mode: 'awsv4',
        collectionUid: collection.uid,
        itemUid: item.uid,
        content: {
          accessKeyId: awsv4Auth.accessKeyId,
          secretAccessKey: awsv4Auth.secretAccessKey,
          sessionToken: awsv4Auth.sessionToken,
          service: awsv4Auth.service,
          region: region,
          profileName: awsv4Auth.profileName
        }
      })
    );
  };

  const handleProfileNameChange = (profileName) => {
    dispatch(
      updateAuth({
        mode: 'awsv4',
        collectionUid: collection.uid,
        itemUid: item.uid,
        content: {
          accessKeyId: awsv4Auth.accessKeyId,
          secretAccessKey: awsv4Auth.secretAccessKey,
          sessionToken: awsv4Auth.sessionToken,
          service: awsv4Auth.service,
          region: awsv4Auth.region,
          profileName: profileName
        }
      })
    );
  };

  return (
    <StyledWrapper className="mt-2 w-full">
      <label className="block font-medium mb-2">Access Key ID</label>
      <div className="single-line-editor-wrapper mb-2">
        <CodeEditor
          singleLine
          value={awsv4Auth.accessKeyId || ''}
          onSave={handleSave}
          onChange={(val) => handleAccessKeyIdChange(val)}
          onRun={handleRun}
        />
      </div>

      <label className="block font-medium mb-2">Secret Access Key</label>
      <div className="single-line-editor-wrapper mb-2">
        <CodeEditor
          singleLine
          value={awsv4Auth.secretAccessKey || ''}
          onSave={handleSave}
          onChange={(val) => handleSecretAccessKeyChange(val)}
          onRun={handleRun}
        />
      </div>

      <label className="block font-medium mb-2">Session Token</label>
      <div className="single-line-editor-wrapper mb-2">
        <CodeEditor
          singleLine
          value={awsv4Auth.sessionToken || ''}
          onSave={handleSave}
          onChange={(val) => handleSessionTokenChange(val)}
          onRun={handleRun}
        />
      </div>

      <label className="block font-medium mb-2">Service</label>
      <div className="single-line-editor-wrapper mb-2">
        <CodeEditor
          singleLine
          value={awsv4Auth.service || ''}
          onSave={handleSave}
          onChange={(val) => handleServiceChange(val)}
          onRun={handleRun}
        />
      </div>

      <label className="block font-medium mb-2">Region</label>
      <div className="single-line-editor-wrapper mb-2">
        <CodeEditor
          singleLine
          value={awsv4Auth.region || ''}
          onSave={handleSave}
          onChange={(val) => handleRegionChange(val)}
          onRun={handleRun}
        />
      </div>

      <label className="block font-medium mb-2">Profile Name</label>
      <div className="single-line-editor-wrapper mb-2">
        <CodeEditor
          singleLine
          value={awsv4Auth.profileName || ''}
          onSave={handleSave}
          onChange={(val) => handleProfileNameChange(val)}
          onRun={handleRun}
        />
      </div>
    </StyledWrapper>
  );
};

export default AwsV4Auth;
