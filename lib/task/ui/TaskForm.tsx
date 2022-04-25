import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useAsyncForm } from "@lib/core/utils/useAsyncData";
import { useTasks } from "../data/hooks";
import { Task } from "../data/task";

type Props = {
  data: Task;
};
export const TaskForm = ({ data }: Props) => {
  const { refetch } = useTasks(data.challengeId);
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useAsyncForm<Task>(data || ({} as Task));

  return (
    <>
      <FormControl isInvalid={!!errors.title}>
        <FormLabel>Color</FormLabel>
        <Input type="color" {...register("title", { required: "Required!" })} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};
