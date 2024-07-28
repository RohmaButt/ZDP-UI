import React, { } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SettingsPanelComponent } from "./SettingsPanel";

export type SettingsParentProps = {
    data: any;
    notificationSettings: {
        itemEdited: {
            isEmailNotification: boolean;
            isInAppNotification: boolean;
        };
        itemShared: {
            isEmailNotification: boolean;
            isInAppNotification: boolean;
        };
        approvalRequest: {
            isEmailNotification: boolean;
            isInAppNotification: boolean;
        };
    };
    handleToggle: (field: string, value: any) => void;
    value: string;
    appIds: any;
    handleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

export const NotificationSettingsComponent = (props: SettingsParentProps) => {
    const {
        data,
        notificationSettings,
        handleToggle,
        value,
        appIds,
        handleChange
    } = props;

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider'
                }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Admin" value="1"
                            sx={{
                                textTransform: 'none',
                                color: '#132640',
                                fontSize: 13,
                                fontFamily: 'Open Sans',
                                fontWeight: '400',
                                wordWrap: 'break-word',
                                padding: 0
                            }}
                            disabled={!appIds.includes(1)}
                        />
                        <Tab label="Dataflow" value="2"
                            sx={{
                                textTransform: 'none',
                                color: '#132640',
                                fontSize: 14,
                                fontFamily: 'Open Sans',
                                fontWeight: '400',
                                wordWrap: 'break-word',
                                padding: 0
                            }}
                            disabled={!appIds.includes(2)}
                        />
                        <Tab label="PIM" value="3"
                            sx={{
                                textTransform: 'none',
                                color: '#132640',
                                fontSize: 14,
                                fontFamily: 'Open Sans',
                                fontWeight: '400',
                                wordWrap: 'break-word',
                                padding: 0
                            }}
                            disabled={!appIds.includes(3)}
                        />
                        <Tab label="Merchandising" value="4"
                            sx={{
                                textTransform: 'none',
                                color: '#132640',
                                fontSize: 14,
                                fontFamily: 'Open Sans',
                                fontWeight: '400',
                                wordWrap: 'break-word',
                                padding: 0
                            }}
                            disabled={!appIds.includes(4)}
                        />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <SettingsPanelComponent
                        data={notificationSettings}
                        notificationSettings={notificationSettings}
                        handleToggle={handleToggle}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <SettingsPanelComponent
                        data={notificationSettings}
                        notificationSettings={notificationSettings}
                        handleToggle={handleToggle}
                    />
                </TabPanel>
                <TabPanel value="3">
                    <SettingsPanelComponent
                        data={notificationSettings}
                        notificationSettings={notificationSettings}
                        handleToggle={handleToggle}
                    />
                </TabPanel>
                <TabPanel value="4">
                    <SettingsPanelComponent
                        data={notificationSettings}
                        notificationSettings={notificationSettings}
                        handleToggle={handleToggle}
                    />
                </TabPanel>
            </TabContext>
        </Box>
    );
};
