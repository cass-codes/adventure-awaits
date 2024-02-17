import { User } from "../../types/User";

function hasAnyRelationships(relationships: {
  Lyra?: number | undefined;
  Hunstan?: number | undefined;
  Kael?: number | undefined;
  Somerild?: number | undefined;
}) {
  return Object.keys(relationships).length === 0;
}

function UserRelationshipsTab({ userData }: { userData: User }) {
  const relationships = userData.relationships;
  if (hasAnyRelationships(relationships)) {
    return (
      <>
        <h3>Relationships</h3>
        <p>No relationships yet, explore your world more to meet people</p>
      </>
    );
  }
  const relationshipKeys = Object.keys(relationships);
  return (
    <>
      <h3>Relationships</h3>

      <ul>
        {relationshipKeys.map((relationshipKey) => {
          return (
            <li key={relationshipKey}>
              {relationshipKey} -{" "}
              {relationships[relationshipKey as keyof typeof relationships]}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserRelationshipsTab;
