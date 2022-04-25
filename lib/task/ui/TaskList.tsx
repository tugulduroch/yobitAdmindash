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
  challengeId: string;
};
export const TaskList = ({ challengeId }: Props) => {
  const { data } = useTasks(challengeId);
  return (
    <>
      <Accordion>
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
              <TaskForm data={r} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
