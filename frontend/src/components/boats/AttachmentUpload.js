import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rebass/emotion';
import styled from 'react-emotion';
import Dropzone from 'react-dropzone';
import { Upload } from 'emotion-icons/fa-solid';
import { createAttachment } from '../../modules/attachments/actions';

class AttachmentUpload extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { files: [] }
  }

  onDrop = (files) => {
    const { id } = this.props;
    let data = new FormData();

    this.setState({ files },
      () => {
        this.state.files.forEach(file => {
          data.append('attachments', file)
        })

        this.props.dispatch(createAttachment(id, data));
      }
    );
  }

  render() { 
    const { files } = this.state;

    return (
      <Flex>
        {files.map((file, i) =>
          <Preview key={file.name + i}></Preview>
        )}
        <Dropzone onDrop={this.onDrop} style={{}}>
          <Container>
            <Upload size={30} />
          </Container>
        </Dropzone>
      </Flex>
    );
  }
}

const Container = styled('div')(props => 
  ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed #d9d9d9',
    width: '100px',
    height: '100px',
    color: props.theme.colors.gray,
    cursor: 'pointer',
    borderRadius: '4px',
    '&:hover': {
      borderColor: 'gray',
    }
  })
)

const Preview = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '10px',
  border: '1px solid #d9d9d9',
  width: '100px',
  height: '100px',
  borderRadius: '4px',
})

export default connect()(AttachmentUpload);