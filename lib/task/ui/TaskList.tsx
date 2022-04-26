import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useTasks } from "../data/hooks";
import { TaskForm } from "./TaskForm";

type Props = {
  challengeId: string | undefined;
};
export const TaskList = ({ challengeId }: Props) => {
  const { data } = useTasks(challengeId);
  return (
    <>
      <Accordion allowToggle>
        {data?.map((r) => (
          <AccordionItem key={r.id}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {r.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TaskForm challengeId={challengeId} data={r} />
            </AccordionPanel>
          </AccordionItem>
        ))}

        {challengeId && (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Create task
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TaskForm challengeId={challengeId} data={undefined} />
            </AccordionPanel>
          </AccordionItem>
        )}
      </Accordion>
    </>
  );
};
