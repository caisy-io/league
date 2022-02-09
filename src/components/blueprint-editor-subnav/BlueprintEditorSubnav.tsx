import React, { FC } from "react";
import { Badge, EBadgePosition } from "../badge";
import { LineTab } from "../line-tab";
import { IconArrowDo, IconArrowUndo, IconEdit, IconGearSettings, IconPlusCircle } from "../../icons";
import { FlatActionButton } from "../flat-action-button/FlatActionButton";
import { SBlueprintEditorSubnav } from "./styles/SBlueprintEditorSubnav";
import { SBlueprintEditorSubnavAddButton } from "./styles/SBlueprintEditorSubnavAddButton";
import { SBlueprintEditorSubnavConfig } from "./styles/SBlueprintEditorSubnavConfig";
import { SBlueprintEditorSubnavConfigButtons } from "./styles/SBlueprintEditorSubnavConfigButtons";
import { SBlueprintEditorSubnavConfigDivider } from "./styles/SBlueprintEditorSubnavConfigDivider";
import { SBlueprintEditorSubnavEditIconWrapper } from "./styles/SBlueprintEditorSubnavEditIconWrapper";
import { SBlueprintEditorSubnavTab } from "./styles/SBlueprintEditorSubnavTab";
import { SBlueprintEditorSubnavTabs } from "./styles/SBlueprintEditorSubnavTabs";

interface IBlueprintEditorSubnavGroup {
  name: string;
  groupId: number | string;
}

interface IBlueprintEditorSubnav {
  groups: IBlueprintEditorSubnavGroup[];
  onSelectGroup: (group: IBlueprintEditorSubnavGroup) => void;
  selectedGroup: IBlueprintEditorSubnavGroup;
  onGroupAdd: () => void;
  onClickConfig?: () => void;
  configBadgeValue?: string;
  onRedo?: () => void;
  onUndo?: () => void;
  onEditGroup?: (group: IBlueprintEditorSubnavGroup) => void;
}

export const BlueprintEditorSubnav: FC<IBlueprintEditorSubnav> = ({
  groups,
  onSelectGroup,
  selectedGroup,
  onGroupAdd,
  onUndo,
  onRedo,
  onClickConfig,
  configBadgeValue,
  onEditGroup,
}) => {
  const handleEditTab = (e, group) => {
    e.stopPropagation();
    onEditGroup?.(group);
  };

  return (
    <SBlueprintEditorSubnav>
      <SBlueprintEditorSubnavAddButton onClick={onGroupAdd}>
        <IconPlusCircle size={16} />
      </SBlueprintEditorSubnavAddButton>

      <SBlueprintEditorSubnavTabs>
        {groups.map((group) => (
          <SBlueprintEditorSubnavTab key={group.groupId}>
            <LineTab activated={selectedGroup.groupId === group.groupId} onClick={() => onSelectGroup(group)}>
              {group.name}
              {!!onEditGroup && (
                <SBlueprintEditorSubnavEditIconWrapper onClick={(e) => handleEditTab(e, group)}>
                  <IconEdit size={16} />
                </SBlueprintEditorSubnavEditIconWrapper>
              )}
            </LineTab>
          </SBlueprintEditorSubnavTab>
        ))}
      </SBlueprintEditorSubnavTabs>

      <SBlueprintEditorSubnavConfig>
        <FlatActionButton type="default" onClick={onClickConfig}>
          <IconGearSettings /> Sidebar Configuration
          {configBadgeValue && (
            <Badge position={EBadgePosition.Center} value={configBadgeValue} size="small" type="important" />
          )}
        </FlatActionButton>
        <SBlueprintEditorSubnavConfigDivider />
        <SBlueprintEditorSubnavConfigButtons>
          <FlatActionButton type="blue" onClick={onUndo}>
            <IconArrowUndo /> Undo
          </FlatActionButton>
          <FlatActionButton type="blue" onClick={onRedo}>
            <IconArrowDo /> Redo
          </FlatActionButton>
        </SBlueprintEditorSubnavConfigButtons>
      </SBlueprintEditorSubnavConfig>
    </SBlueprintEditorSubnav>
  );
};
