import React from 'react';

import { Divider, Dropdown, Header, Icon, Menu, Popup, Segment, Table } from 'semantic-ui-react'
import UserLink from '../../../utils/link/user'

export default class PostSidebar extends React.Component {
  render() {
    let post = this.props.post.content,
        payout = post.pending_payout_value
    if(post.max_accepted_payout === 0) {
      payout = (
        <Popup
          trigger={<del>~${post.pending_payout_value}</del>}
          position='right center'
          content='This user has choosen to decline a payout on this post.'
        />
      )
    }
    return (
      <div>
        <Divider horizontal style={{margin: '0.5em 0 1em'}}>Original Poster</Divider>
        <Segment basic className="thread-author center aligned">
          <img alt='' src={`https://img.steemconnect.com/@${post.author}?size=150`} className="ui centered spaced rounded bordered image" />
          <Header size='large'>
            <UserLink username={post.author} />
          </Header>
        </Segment>
        <Divider horizontal>Post Info</Divider>
        <Menu color='blue' inverted fluid vertical>
          <Dropdown color='blue' text='View this post on...' size='small' pointing='left' className='link item'>
            <Dropdown.Menu>
              <a href={`https://steemit.com${post.url}`} target='_blank' className='item'>
                <Icon name='external' />
                steemit.com
              </a>
              <a href={`https://busy.org${post.url}`} target='_blank' className='item'>
                <Icon name='external' />
                busy.org
              </a>
              <a href={`https://steemdb.com${post.url}`} target='_blank' className='item'>
                <Icon name='external' />
                steemdb.com
              </a>
              <a href={`https://phist.steemdata.com/history?identifier=steemit.com${post.url}`} target='_blank' className='item'>
                <Icon name='external' />
                phist.steemdata.com
              </a>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Segment basic>
          <Table definition size='small'>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Replies</Table.Cell>
                <Table.Cell>{post.children}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Votes</Table.Cell>
                <Table.Cell>
                  {post.net_votes}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Reward Share</Table.Cell>
                <Table.Cell>
                  {payout}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }
}