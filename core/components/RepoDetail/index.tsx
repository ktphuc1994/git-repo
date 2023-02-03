import { InterfaceRepoDetailComponent } from '../../interfaces/repository';

function Details({ repo }: InterfaceRepoDetailComponent) {
  return (
    <div>
      <p>{repo.name}</p>
      <p>{repo.description}</p>
    </div>
  );
}

export default Details;
