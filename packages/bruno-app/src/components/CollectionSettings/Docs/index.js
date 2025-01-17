import 'github-markdown-css/github-markdown.css';
import get from 'lodash/get';
import { updateCollectionDocs } from 'providers/ReduxStore/slices/collections';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCollectionRoot } from 'providers/ReduxStore/slices/collections/actions';
import Markdown from 'components/MarkDown';
import StyledWrapper from './StyledWrapper';
import CodeEditor from 'components/CodeEditor';

const Docs = ({ collection }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const docs = get(collection, 'root.docs', '');

  const toggleViewMode = () => {
    setIsEditing((prev) => !prev);
  };

  const onEdit = (value) => {
    dispatch(
      updateCollectionDocs({
        collectionUid: collection.uid,
        docs: value
      })
    );
  };

  const onSave = () => dispatch(saveCollectionRoot(collection.uid));

  return (
    <StyledWrapper className="mt-1 h-full w-full relative">
      <div className="editing-mode mb-2" role="tab" onClick={toggleViewMode}>
        {isEditing ? 'Preview' : 'Edit'}
      </div>

      {isEditing ? (
        <CodeEditor value={docs || ''} onChange={onEdit} onSave={onSave} mode="application/text" />
      ) : (
        <Markdown onDoubleClick={toggleViewMode} content={docs} />
      )}
    </StyledWrapper>
  );
};

export default Docs;
