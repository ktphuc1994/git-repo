import { Box, Button, Typography } from '@mui/material';
import { InterfaceRepoDetailComponent } from '../../interfaces/repository';

function Details({ repo }: InterfaceRepoDetailComponent) {
  return (
    <Box component="div">
      <Typography
        sx={{
          fontWeight: 600,
          '&:hover': { color: 'primary.light', transition: 'all 0.5s' },
        }}
        variant="h5"
        component="a"
        color="primary"
        href={repo.html_url}
        target="_blank"
      >
        {repo.name}
        <Typography sx={{ ml: '0.25rem' }} component="span" color="gray">
          -{repo.id}
        </Typography>
      </Typography>
      <Box component="div">
        <Typography component="p">Original Owner</Typography>
        <p>{repo.owner.login}</p>
        <p>{repo.owner.avatar_url}</p>
        <p>{repo.owner.html_url}</p>
      </Box>
      <Box>
        <Typography component="p">Description</Typography>
        <Typography component="p">{repo.description}</Typography>
      </Box>
      <Button
        variant="outlined"
        color="error"
        href={repo.html_url}
        target="_blank"
      >
        TO GITHUB
      </Button>
    </Box>
  );
}

export default Details;

// {
//   "id": 541846732,
//   "node_id": "R_kgDOIEvszA",
//   "name": "bc04-capstone-react-backup",
//   "full_name": "huytran0794/bc04-capstone-react-backup",
//   "private": false,
//   "owner": {
//     "login": "huytran0794",
//     "id": 111429945,
//     "node_id": "U_kgDOBqRJOQ",
//     "avatar_url": "https://avatars.githubusercontent.com/u/111429945?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/huytran0794",
//     "html_url": "https://github.com/huytran0794",
//     "followers_url": "https://api.github.com/users/huytran0794/followers",
//     "following_url": "https://api.github.com/users/huytran0794/following{/other_user}",
//     "gists_url": "https://api.github.com/users/huytran0794/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/huytran0794/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/huytran0794/subscriptions",
//     "organizations_url": "https://api.github.com/users/huytran0794/orgs",
//     "repos_url": "https://api.github.com/users/huytran0794/repos",
//     "events_url": "https://api.github.com/users/huytran0794/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/huytran0794/received_events",
//     "type": "User",
//     "site_admin": false
//   },
//   "html_url": "https://github.com/huytran0794/bc04-capstone-react-backup",
//   "description": "Bài tập capstone react BC04 - git backup",
//   "fork": false,
//   "url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup",
//   "forks_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/forks",
//   "keys_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/keys{/key_id}",
//   "collaborators_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/collaborators{/collaborator}",
//   "teams_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/teams",
//   "hooks_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/hooks",
//   "issue_events_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/issues/events{/number}",
//   "events_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/events",
//   "assignees_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/assignees{/user}",
//   "branches_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/branches{/branch}",
//   "tags_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/tags",
//   "blobs_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/git/blobs{/sha}",
//   "git_tags_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/git/tags{/sha}",
//   "git_refs_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/git/refs{/sha}",
//   "trees_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/git/trees{/sha}",
//   "statuses_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/statuses/{sha}",
//   "languages_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/languages",
//   "stargazers_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/stargazers",
//   "contributors_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/contributors",
//   "subscribers_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/subscribers",
//   "subscription_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/subscription",
//   "commits_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/commits{/sha}",
//   "git_commits_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/git/commits{/sha}",
//   "comments_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/comments{/number}",
//   "issue_comment_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/issues/comments{/number}",
//   "contents_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/contents/{+path}",
//   "compare_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/compare/{base}...{head}",
//   "merges_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/merges",
//   "archive_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/{archive_format}{/ref}",
//   "downloads_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/downloads",
//   "issues_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/issues{/number}",
//   "pulls_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/pulls{/number}",
//   "milestones_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/milestones{/number}",
//   "notifications_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/notifications{?since,all,participating}",
//   "labels_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/labels{/name}",
//   "releases_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/releases{/id}",
//   "deployments_url": "https://api.github.com/repos/huytran0794/bc04-capstone-react-backup/deployments",
//   "created_at": "2022-09-27T01:02:25Z",
//   "updated_at": "2022-10-14T15:13:28Z",
//   "pushed_at": "2022-10-15T02:05:30Z",
//   "git_url": "git://github.com/huytran0794/bc04-capstone-react-backup.git",
//   "ssh_url": "git@github.com:huytran0794/bc04-capstone-react-backup.git",
//   "clone_url": "https://github.com/huytran0794/bc04-capstone-react-backup.git",
//   "svn_url": "https://github.com/huytran0794/bc04-capstone-react-backup",
//   "homepage": "bc04-khucthienphuc-capstone-react-moviewebsite-userview.vercel.app",
//   "size": 1854,
//   "stargazers_count": 0,
//   "watchers_count": 0,
//   "language": "JavaScript",
//   "has_issues": true,
//   "has_projects": true,
//   "has_downloads": true,
//   "has_wiki": true,
//   "has_pages": false,
//   "has_discussions": false,
//   "forks_count": 0,
//   "mirror_url": null,
//   "archived": false,
//   "disabled": false,
//   "open_issues_count": 0,
//   "license": null,
//   "allow_forking": true,
//   "is_template": false,
//   "web_commit_signoff_required": false,
//   "topics": [

//   ],
//   "visibility": "public",
//   "forks": 0,
//   "open_issues": 0,
//   "watchers": 0,
//   "default_branch": "main",
//   "permissions": {
//     "admin": false,
//     "maintain": false,
//     "push": true,
//     "triage": true,
//     "pull": true
//   }
// }
