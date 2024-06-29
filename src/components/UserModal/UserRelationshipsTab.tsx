import { Character } from "../../types/User";
import { getUrlFromMap } from "../picture-url-map";
import "./UserRelationshipsTab.css";

const RELATIONSHIP_MAX = 10;

function getRelationshipPicture(relationship: string) {
  return getUrlFromMap(relationship + ".png");
}

function hasAnyRelationships(
  relationships:
    | {
        Lyra?: number | undefined;
        Hunstan?: number | undefined;
        Kael?: number | undefined;
        Somerild?: number | undefined;
      }
    | undefined
) {
  return relationships && Object.keys(relationships).length === 0;
}

function UserRelationshipsTab({
  characterData,
}: {
  characterData: Character | undefined;
}) {
  const relationships = characterData?.relationships || {};
  if (hasAnyRelationships(relationships)) {
    return (
      <>
        <h3>Relationships</h3>
        <p>No relationships yet. Explore your world to meet people!</p>
      </>
    );
  }
  const relationshipKeys = Object.keys(relationships);

  function getRelationshipRow(relationshipKey: string) {
    const relationshipValue =
      relationships[relationshipKey as keyof typeof relationships] || 0;
    return (
      <>
        <td>
          <img
            className="relationshipImage"
            src={getRelationshipPicture(relationshipKey)}
            alt={relationshipKey}
          />
        </td>
        <td>{relationshipKey}</td>
        <td>
          <span>
            <meter
              className="progressBar"
              value={relationshipValue}
              min="0"
              max={RELATIONSHIP_MAX}
            />
          </span>
        </td>
      </>
    );
  }

  return (
    <>
      <h3>Relationships</h3>
      <table>
        <tbody>
          {relationshipKeys.map((relationshipKey) => {
            return (
              <tr key={relationshipKey}>
                {getRelationshipRow(relationshipKey)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserRelationshipsTab;
